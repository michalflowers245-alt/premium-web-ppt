/**
 * Rebuild three editable concept decks with the Codex Artifact Tool runtime.
 * All content/assets are relative to this file. No private machine paths.
 * See README.md for the optional runtime environment variables.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const buildRoot = path.join(here, '.build');
const artifactRoot = process.env.ARTIFACT_TOOL_PACKAGE;
if(artifactRoot)process.env.RUNTIME_NODE_MODULES ??= path.resolve(artifactRoot,'../..');
const api = artifactRoot
  ? await import(pathToFileURL(path.join(artifactRoot, 'dist/artifact_tool.mjs')).href)
  : await import('@oai/artifact-tool');
const { Presentation, PresentationFile, FileBlob } = api;
const require = artifactRoot ? createRequire(path.join(artifactRoot, 'package.json')) : createRequire(import.meta.url);
const { Canvas, loadImage } = require('skia-canvas');

const FONT = process.env.PPT_SANS_FONT || 'PingFang SC';
const SERIF = process.env.PPT_SERIF_FONT || 'Songti SC';
const LATIN = process.env.PPT_LATIN_FONT || 'Georgia';
const W = 1280, H = 720;
const C = { paper:'#F3F0E6', ink:'#242720', olive:'#536044', line:'#D3D3C7', gray:'#777A70', blue:'#214E66', white:'#FFFFFF', yellow:'#E8D23A', cobalt:'#2944D5', black:'#151815' };
const demos = '原创概念演示 · 所有品牌与内容均为虚构示例';

function shape(slide, x,y,w,h,fill,geometry='rect',stroke='none',sw=0) {
  return slide.shapes.add({ geometry, position:{left:x,top:y,width:w,height:h}, fill, line:{style:'solid',fill:stroke,width:sw} });
}
function text(slide, value,x,y,w,h,size=28,color=C.ink,opts={}) {
  const t=shape(slide,x,y,w,h,'none','textbox');
  t.text=value;
  t.text.style={ fontSize:size, typeface:opts.font||FONT, bold:opts.bold||false, color, alignment:opts.align||'left', verticalAlignment:'top', insets:0, autoFit:'none', wrap:'square' };
  return t;
}
function line(slide,x,y,w,color=C.line,width=1) { return shape(slide,x,y,w,0,'none','line',color,width); }
function footer(slide,n,color=C.gray) {
  text(slide,'原创概念演示',72,670,450,24,16,color);
  text(slide,String(n).padStart(2,'0'),1130,670,78,24,16,color,{align:'right'});
}
function note(slide, refs, asset='Native text, shapes and tables created for this concept demo.') {
  slide.speakerNotes.text=`${demos}\nVisual grammar references (local snapshots, no current-site interaction claims): ${refs}\n${asset}`;
}
async function image(slide,file,x,y,w,h) {
  const b=await fs.readFile(file);
  slide.images.add({blob:b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),contentType:'image/png',alt:'GPT-generated original concept still life; not a real brand or client photograph.',fit:'cover',position:{left:x,top:y,width:w,height:h}});
}
function setup() { return Presentation.create({ slideSize:{width:W,height:H} }); }
function page(p,bg) { const s=p.slides.add();s.background.fill=bg;return s; }

async function craftDeck() {
  const p=setup();
  let s=page(p,C.paper);
  text(s,'缓物',72,50,200,50,30,C.olive,{font:SERIF});
  text(s,'HUANWU / PAPER & SCENT',820,59,388,30,17,C.olive,{font:LATIN,align:'right'});
  line(s,72,112,1136);
  text(s,'把日常，\n留一点空白。',72,193,520,220,68,C.ink,{font:SERIF});
  text(s,'纸的触感。香的停留。',76,470,420,38,26,C.olive);
  text(s,'一组关于慢下来的物件提案',76,520,420,30,21,C.gray);
  await image(s,path.join(repo,'examples/shared/craft.png'),620,148,588,452);
  footer(s,1);
  note(s,'045 Buly https://buly1803.com/ ; 049 Smythson https://www.smythson.com/ ; 195 Château Margaux https://www.chateau-margaux.com/','Image: examples/shared/craft.png, generated with GPT ImageGen for this fictional concept. Product names and properties below are design concepts, not verified product claims.');

  s=page(p,C.olive);
  text(s,'从材料开始，\n让物件安静下来。',72,76,690,166,58,C.paper,{font:SERIF});
  text(s,'材料提案',75,302,240,34,24,C.paper);
  text(s,'保留纸纤维的自然起伏，\n让器物的轮廓留在光里。',75,358,520,100,31,C.paper,{font:SERIF});
  text(s,'以下为视觉与材料方向，尚无实际产品参数。',75,520,550,60,20,'#D8DCCF');
  // Native editable paper studies. Deliberate tonal edges show material relationships.
  shape(s,746,153,382,280,'#B4B3A0');
  shape(s,720,131,382,280,'#D3CFBD');
  shape(s,694,109,382,280,'#ECE7D6');
  for(let i=0;i<18;i++) line(s,717,140+i*12,330,i%2?'#DDD9CB':'#E4E0D2',0.7);
  shape(s,750,435,67,67,'#E9E3D2','ellipse');
  shape(s,842,435,67,67,'#BDB9A7','ellipse');
  shape(s,934,435,67,67,'#303B2E','ellipse');
  text(s,'纸白',749,526,90,30,20,C.paper);
  text(s,'石灰',843,526,90,30,20,C.paper);
  text(s,'橄榄',934,526,110,30,20,C.paper);
  footer(s,2,'#D8DCCF');
  note(s,'045 Buly; 049 Smythson. Borrowing material-based color and orderly still-life relationships.','Paper studies and swatches are native editable vector shapes. No factual material specifications are asserted.');

  s=page(p,C.paper);
  text(s,'三件小物，一种日常节奏。',72,64,1120,80,50,C.ink,{font:SERIF});
  text(s,'SERIES STUDY / 系列概念',75,157,800,30,18,C.olive,{font:FONT});
  const xs=[72,464,856];
  for(let i=0;i<3;i++){line(s,xs[i],209,352);text(s,`0${i+1}`,xs[i],230,100,30,18,C.gray);}
  // Three original, editable object illustrations; not product photography.
  shape(s,112,301,255,183,'#D9D4C5');shape(s,135,281,255,183,'#EAE4D5');shape(s,157,261,255,183,'#F9F5E9');
  for(let i=0;i<9;i++) line(s,178,287+i*16,213,'#E7E1D3',0.8);
  shape(s,548,283,141,184,'#D1B875','rect');shape(s,548,269,141,36,'#B9A576','ellipse');shape(s,580,238,77,38,'#414735');shape(s,572,350,93,68,'#F2EDDD');
  text(s,'缓物',581,369,80,35,23,C.olive,{font:SERIF});
  shape(s,914,353,214,102,'#B9BBA6','ellipse');shape(s,931,337,180,90,'#CFD1BC','ellipse');shape(s,975,309,98,70,'#E6E3D5','ellipse');
  const labels=[['纸笺','把一段想法，留在纸上。'],['室内香','让一个角落，有了气味。'],['置物盘','给常用的小物一个位置。']];
  labels.forEach((v,i)=>{text(s,v[0],xs[i],523,352,45,31,C.ink,{font:SERIF});text(s,v[1],xs[i],581,352,34,22,C.gray);});
  footer(s,3);
  note(s,'049 Smythson; 195 Château Margaux. Same-series grouping and restrained editorial rhythm.','All object studies are native editable vector illustrations. Series names and descriptions are fictional design concepts.');
  return {p,fonts:[FONT,SERIF,LATIN],nativeTables:[]};
}

function businessDeck() {
  const p=setup();
  let s=page(p,'#F7F8F4');
  text(s,'AI 门店试点方案',72,51,700,40,24,C.blue,{bold:true});
  text(s,'先把一次接待\n变成可复盘的流程。',72,151,780,220,62,C.ink,{bold:true});
  text(s,'从一个场景开始，先记录，再判断。',76,439,765,54,29,C.gray);
  shape(s,930,145,278,414,C.blue);
  text(s,'01',957,173,210,91,78,'#DCE7E7',{font:LATIN});
  text(s,'一条顾客路径',959,292,220,45,30,C.white,{bold:true});
  line(s,959,358,215,'#6D8D9C');
  text(s,'需求记录\n店员确认\n后续跟进',959,389,215,145,27,'#E4ECEB');
  line(s,72,586,1136,'#C8D1D2');
  text(s,'方案示意；未提供现状基线、目标值或实际经营结果。',76,611,1110,32,20,C.gray);
  footer(s,1);
  note(s,'132 Pentagram https://www.pentagram.com/ ; 178 Apple https://www.apple.com/ ; 198 JPMorgan Private Bank https://privatebank.jpmorgan.com/','Fictional planning example. No customer data, revenue, product performance, or delivered project is represented.');

  s=page(p,'#F7F8F4');
  text(s,'从进店到跟进，每一步都有交接。',72,64,1136,80,48,C.ink,{bold:true});
  text(s,'用一条可检查的路径，安排 AI 与店员的分工。',76,160,1130,40,25,C.gray);
  const steps=[['进店','提出需求','记录需求要点'],['选品','整理偏好','店员核实推荐'],['报价','生成摘要','负责人确认口径'],['跟进','提醒下一步','人工完成沟通']];
  const xs=[72,365,658,951];
  line(s,107,286,931,'#A7BCC5',2);
  steps.forEach((v,i)=>{
    shape(s,xs[i],253,64,64,C.blue,'ellipse');text(s,`0${i+1}`,xs[i],266,64,42,26,C.white,{align:'center'});
    text(s,v[0],xs[i],352,250,54,35,C.ink,{bold:true});
    text(s,v[1],xs[i],427,250,38,25,C.blue);
    text(s,v[2],xs[i],483,250,55,23,C.gray);
  });
  line(s,72,584,1136,'#C8D1D2');
  text(s,'AI 整理信息，店员核实事实；价格与服务承诺由负责人确认。',76,614,1110,35,22,C.gray);
  footer(s,2);
  note(s,'132 Pentagram common baseline; 198 JPMorgan horizontal editorial rows.','Editable flow, native circles/lines/text. This is a proposed division of responsibilities, not an implemented system.');

  s=page(p,'#F7F8F4');
  text(s,'先记录基线，再确认试点目标。',72,61,1136,80,48,C.ink,{bold:true});
  text(s,'指标框架 / 数值与责任角色均待试点方确认',76,158,1110,38,23,C.blue);
  const vals=[['观察什么','现状基线','怎样记录','责任角色'],['需求记录完整度','待测','完整字段数 / 应填字段数','店长确认'],['跟进完成度','待测','已完成跟进数 / 应跟进数','店员记录'],['接待记录耗时','待测','按统一起止点计时','试点负责人'],['资料核对情况','待测','抽样检查商品与报价信息','负责人核查']];
  const t=s.tables.add({rows:5,columns:4,left:72,top:231,width:1136,height:339,columnWidths:[276,168,468,224],values:vals});
  t.borders.assign({style:'solid',fill:'#CFD8DA',width:1});
  for(let r=0;r<5;r++)for(let c=0;c<4;c++){
    const cell=t.getCell(r,c);cell.fill=r===0?C.blue:(r%2?'#F7F8F4':'#EDF1EF');
    cell.text.style={typeface:FONT,fontSize:r===0?24:23,bold:r===0,color:r===0?C.white:C.ink,insets:{left:16,right:12,top:16,bottom:12},verticalAlignment:'middle'};
  }
  text(s,'是否扩大投入，依据约定口径的记录与复盘决定。',76,606,1110,40,26,C.ink);
  footer(s,3);
  note(s,'198 JPMorgan Private Bank horizontal business information hierarchy.','All table cells remain editable. Values "待测" are missing baseline data, not zero. Formula labels are illustrative definitions for discussion, not validated operational metrics.');
  return {p,fonts:[FONT,LATIN],nativeTables:[3]};
}

function art(slide,x,y,w,h,variant) {
  if(variant===0){
    shape(slide,x,y,w,h,C.black);
    for(let i=0;i<7;i++)shape(slide,x+35+i*w/8,y+30,w/22,h-60,i%2===0?C.yellow:'#626750');
    shape(slide,x+w*0.25,y+h*0.30,w*0.50,w*0.50,C.yellow,'ellipse');
    shape(slide,x+w*0.50,y+h*0.30,w*0.25,w*0.50,C.black);
  } else if(variant===1){
    shape(slide,x,y,w,h,C.cobalt);
    shape(slide,x+w*0.14,y+h*0.14,w*0.50,w*0.50,C.yellow,'ellipse');
    shape(slide,x+w*0.55,y,w*0.12,h,'#E9E6D7');
    shape(slide,x+w*0.76,y,w*0.12,h,'#B6C2CB');
  } else {
    shape(slide,x,y,w,h,'#EAE6DB');
    shape(slide,x+w*0.22,y+h*0.14,w*0.56,h*0.72,C.black,'ellipse');
    shape(slide,x+w*0.48,y,w*0.15,h,'#EAE6DB');
    for(let i=0;i<5;i++)line(slide,x+30,y+h*.24+i*h*.12,w-60,'#B8B8AD',1);
  }
}
function cultureDeck() {
  const p=setup();
  let s=page(p,C.yellow);
  text(s,'CURATORIAL STUDY / 原创策展概念',72,51,1136,34,21,C.black);
  line(s,72,106,1136,C.black,1);
  text(s,'光的\n秩序',72,151,700,328,142,C.black,{bold:true});
  text(s,'观看，也是一种空间关系。',80,532,700,58,33,C.black);
  art(s,822,151,386,437,0);
  footer(s,1,C.black);
  note(s,'004 Comme des Garçons https://www.comme-des-garcons.com/ ; 131 OMA https://www.oma.com/ ; 150 PSA https://www.powerstationofart.com/','All geometric artworks are original native editable shapes made for a fictional exhibition. This is not a real event announcement.');

  s=page(p,C.black);
  text(s,'让作品之间的空白，\n也参与叙事。',72,61,1136,121,50,C.paper,{bold:true});
  art(s,72,227,552,301,1);art(s,656,227,552,301,2);
  text(s,'01 / 光穿过结构',72,554,552,40,28,C.paper);
  text(s,'02 / 形体留下边界',656,554,552,40,28,C.paper);
  text(s,'明度、遮挡与观看距离构成一组节奏。',75,612,1090,36,23,'#C9CDC2');
  footer(s,2,'#C9CDC2');
  note(s,'004 dual-image relationships; 146 Tate https://www.tate.org.uk/ color blocks and grouping.','Two original native geometric studies. Work titles are fictional; all artwork geometry remains editable.');

  s=page(p,'#F5F3EC');
  text(s,'一场展览，从进入到停留。',72,59,1136,78,50,C.black,{bold:true});
  text(s,'内容与动线 / 策展概念说明',76,158,1130,34,22,C.gray);
  text(s,'01\n—\n03',72,247,245,241,66,C.cobalt,{font:LATIN});
  text(s,'观看路径',76,550,238,40,28,C.black,{bold:true});
  text(s,'用层级消化密度。',76,602,238,32,21,C.gray);
  const vals=[['章节','观看方式','空间提示'],['01 进入','远观整体构图','先让光线建立方向'],['02 聚焦','靠近材料与边界','留出慢下来的位置'],['03 回望','比较作品间关系','让说明回应看见的细节']];
  const t=s.tables.add({rows:4,columns:3,left:357,top:241,width:851,height:315,columnWidths:[190,276,385],values:vals});
  t.borders.assign({style:'solid',fill:'#D2D3C9',width:1});
  for(let r=0;r<4;r++)for(let c=0;c<3;c++){
    const cell=t.getCell(r,c);cell.fill=r===0?C.black:'#F5F3EC';
    cell.text.style={typeface:FONT,fontSize:r===0?24:23,bold:r===0,color:r===0?C.white:C.black,insets:{left:17,right:12,top:17,bottom:12},verticalAlignment:'middle'};
  }
  line(s,357,601,851,C.cobalt,2);
  text(s,'进入',357,619,230,32,22,C.cobalt);text(s,'聚焦',689,619,230,32,22,C.cobalt);text(s,'回望',1102,619,106,32,22,C.cobalt,{align:'right'});
  footer(s,3);
  note(s,'131 OMA and 150 PSA information grouping and editorial density.','Editable native curatorial table. No dates, venues, participants or real exhibition claims are asserted.');
  return {p,fonts:[FONT,LATIN],nativeTables:[3]};
}

async function saveBlob(file,blob){await fs.writeFile(file,new Uint8Array(await blob.arrayBuffer()));}
async function overview(key,files) {
  const canvas=new Canvas(1600,1000),ctx=canvas.getContext('2d');
  ctx.fillStyle='#E9E7DF';ctx.fillRect(0,0,1600,1000);
  const names={craft:['04 / 工艺品牌','暖白、物料与克制的叙述'],business:['05 / AI 门店试点','没有实拍，信息排版仍然成立'],culture:['06 / 文化策展','强标题，也容得下内容密度']};
  ctx.fillStyle='#272B23';ctx.font='32px "PingFang SC"';ctx.fillText(names[key][0],72,71);
  ctx.font='18px "PingFang SC"';ctx.fillStyle='#70766B';ctx.fillText(names[key][1],72,108);
  const imgs=await Promise.all(files.map(loadImage));
  ctx.drawImage(imgs[0],72,179,972,546.75);
  ctx.drawImage(imgs[1],1080,179,448,252);
  ctx.drawImage(imgs[2],1080,474,448,252);
  ctx.fillStyle='#A3AA9A';ctx.fillRect(72,790,1456,1);
  ctx.fillStyle='#536044';ctx.font='22px "PingFang SC"';ctx.fillText('原创概念演示',72,850);
  ctx.fillStyle='#70766B';ctx.font='19px "PingFang SC"';ctx.fillText('3 页可编辑 PPTX  ·  原生文字与图形  ·  点击源文件查看',72,892);
  ctx.font='17px Georgia';ctx.fillText('PREMIUM WEB × PPT',1259,923);
  await fs.writeFile(path.join(repo,`docs/assets/ppt-${key}.png`),await canvas.toBuffer('png'));
}
async function publishDeck(key,data) {
  const dir=path.join(here,key),tmp=path.join(buildRoot,key),out=path.join(tmp,'final');
  await fs.mkdir(dir,{recursive:true});await fs.mkdir(out,{recursive:true});
  const candidate=path.join(tmp,'candidate.pptx');
  await (await PresentationFile.exportPptx(data.p)).save(candidate);
  let final=candidate;
  if(process.env.PRESENTATIONS_SKILL_DIR){
    const skill=path.resolve(process.env.PRESENTATIONS_SKILL_DIR);
    const {finalizePresentation}=await import(pathToFileURL(path.join(skill,'container_tools/artifact_tool_utils.mjs')).href);
    final=path.join(out,`${key}-${Date.now()}.pptx`);
    await finalizePresentation({
      explicitTotalSlideCount:3,requiredNativeTableOwnerSlides:data.nativeTables,
      workspaceDir:here,candidatePath:candidate,finalPath:final,
      pythonExecutable:process.env.PPT_PYTHON||'python3',
      integrityValidatorPath:path.join(skill,'container_tools/inspect_presentation_package_integrity.py'),
      layoutValidatorPath:path.join(skill,'container_tools/inspect_presentation_layout_geometry.py'),
      layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit',...data.nativeTables.flatMap(n=>['--require-native-table-slide',String(n)])],
      fontPolicy:{basis:'design',families:data.fonts},verifyArtifactToolImport:true,
      receiptPath:path.join(tmp,`${path.basename(final)}.validation.json`)
    });
  }
  await fs.copyFile(final,path.join(dir,`${key}.pptx`));
  const loaded=await PresentationFile.importPptx(await FileBlob.load(path.join(dir,`${key}.pptx`)));
  const files=[];
  for(let i=0;i<loaded.slides.items.length;i++){
    const file=path.join(dir,`slide-${i+1}.png`);
    await saveBlob(file,await loaded.export({slide:loaded.slides.items[i],format:'png',scale:1.5}));
    files.push(file);
  }
  await overview(key,files);
  console.log(`Created ${key}: ${loaded.slides.items.length} re-imported slides; editable source and PNG previews.`);
}

await fs.mkdir(buildRoot,{recursive:true});
const chosen=process.argv.slice(2);
const keys=chosen.length?chosen:['craft','business','culture'];
for(const key of keys){
  if(!['craft','business','culture'].includes(key))throw new Error(`Unknown deck ${key}`);
  const data=key==='craft'?await craftDeck():key==='business'?businessDeck():cultureDeck();
  await publishDeck(key,data);
}
