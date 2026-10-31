"""Portable CLI checks using bundled metadata and synthetic PPTX files only."""
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from zipfile import ZipFile


ROOT = Path(__file__).resolve().parents[1]
SCRIPT = ROOT / 'scripts' / 'inspect_reference.py'
CORPUS = json.loads((ROOT / 'references' / 'corpus.json').read_text(encoding='utf-8'))


class ReferenceCliTests(unittest.TestCase):
    def run_cli(self, *args):
        # An unrelated working directory ensures no implicit source-directory lookup.
        with tempfile.TemporaryDirectory() as cwd:
            return subprocess.run(
                [sys.executable, str(SCRIPT), *map(str, args)],
                cwd=cwd, capture_output=True, text=True, encoding='utf-8',
            )

    def test_complete_portable_manifest(self):
        self.assertEqual([x['id'] for x in CORPUS], list(range(1, 201)))
        for item in CORPUS:
            with self.subTest(id=item['id']):
                source = Path(item['source'])
                self.assertFalse(source.is_absolute())
                self.assertEqual(source.parts[0], '单站PPT')
                self.assertNotIn('..', source.parts)
                self.assertTrue(item['source_url'].startswith('https://'))
                self.assertTrue((ROOT / 'references' / item['visual_atlas']).is_file())
                self.assertGreater(len(item['screenshots']), 0)

    def test_metadata_without_originals(self):
        result = self.run_cli('--id', 56)
        self.assertEqual(result.returncode, 0, result.stderr)
        item = json.loads(result.stdout)
        self.assertEqual(item['id'], 56)
        self.assertIn('地区', item['visual_status'])
        self.assertEqual(item['source'], '单站PPT/056-Le Labo.pptx')
        self.assertNotIn('/Users/', result.stdout)

    def test_extraction_requires_explicit_source_root(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / 'not-created'
            result = self.run_cli('--id', 4, '--output-dir', output)
            self.assertEqual(result.returncode, 2)
            self.assertIn('--source-root', result.stderr)
            self.assertIn('references/visual-atlas/001-010.jpg', result.stderr)
            self.assertFalse(output.exists())

    def test_missing_original_points_to_atlas(self):
        with tempfile.TemporaryDirectory() as temp:
            result = self.run_cli('--id', 187, '--source-root', temp,
                                  '--output-dir', Path(temp) / 'output')
            self.assertEqual(result.returncode, 2)
            self.assertIn('原始PPTX不存在', result.stderr)
            self.assertIn('references/visual-atlas/181-190.jpg', result.stderr)

    def test_invalid_id_and_image(self):
        for args in [('--id', 0), ('--id', 201), ('--id', 4, '--image', 0),
                     ('--id', 4, '--image', 2)]:
            with self.subTest(args=args):
                self.assertEqual(self.run_cli(*args).returncode, 2)

    def test_image_flags_are_mutually_exclusive(self):
        result = self.run_cli('--id', 187, '--image', 2, '--all-images')
        self.assertEqual(result.returncode, 2)

    def make_source(self, root, item):
        source = root / item['source']
        source.parent.mkdir(parents=True, exist_ok=True)
        contents = {}
        with ZipFile(source, 'w') as archive:
            for i, shot in enumerate(item['screenshots'], start=1):
                contents[shot['entry']] = f'synthetic screenshot {i}'.encode()
                archive.writestr(shot['entry'], contents[shot['entry']])
        return source, contents

    def test_specific_images_and_no_overwrite(self):
        item = next(x for x in CORPUS if x['id'] == 187)
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            source, contents = self.make_source(root, item)
            original = source.read_bytes()
            output = root / 'output'
            args = ('--id', 187, '--source-root', root, '--output-dir', output,
                    '--image', 2, '--image', 3, '--image', 2)
            result = self.run_cli(*args)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(sorted(p.name for p in output.iterdir()),
                             ['187-image2.png', '187-image3.png'])
            self.assertEqual((output / '187-image2.png').read_bytes(),
                             contents['ppt/media/image2.png'])
            # Every destination is checked before writing, so a later collision
            # cannot create a partial new selection.
            repeat = self.run_cli('--id', 187, '--source-root', root,
                                  '--output-dir', output, '--image', 1, '--image', 2)
            self.assertEqual(repeat.returncode, 2)
            self.assertIn('Refusing to overwrite', repeat.stderr)
            self.assertFalse((output / '187-image1.png').exists())
            self.assertEqual(source.read_bytes(), original)

    def test_default_and_all_images(self):
        item = next(x for x in CORPUS if x['id'] == 187)
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            self.make_source(root, item)
            first = root / 'first'
            all_images = root / 'all'
            default = self.run_cli('--id', 187, '--source-root', root,
                                   '--output-dir', first)
            self.assertEqual(default.returncode, 0, default.stderr)
            self.assertEqual([p.name for p in first.iterdir()], ['187-image1.png'])
            result = self.run_cli('--id', 187, '--source-root', root,
                                  '--output-dir', all_images, '--all-images')
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertEqual(len(list(all_images.iterdir())), len(item['screenshots']))


if __name__ == '__main__':
    unittest.main()
