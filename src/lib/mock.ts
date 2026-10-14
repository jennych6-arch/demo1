export type Status='Signed Off'|'Changes Required'|'Submitted'|'Not Submitted'|'Under Review';
export type Submission={id:number,granularity:string,dataset:string,team:string,version:string,status:Status,updated:string,reviewer:string};
export const initialSubmissions:Submission[]=[
{id:1,granularity:'HBAP',dataset:'Interest Rate Risk',team:'Treasury',version:'v3',status:'Signed Off',updated:'12 Oct 2026',reviewer:'Sarah Lee'},
{id:2,granularity:'HBAP',dataset:'FX Risk',team:'Treasury',version:'v2',status:'Changes Required',updated:'12 Oct 2026',reviewer:'Sarah Lee'},
{id:3,granularity:'HBEU',dataset:'Interest Rate Risk',team:'Risk',version:'v1',status:'Submitted',updated:'13 Oct 2026',reviewer:'Sarah Lee'},
{id:4,granularity:'HBEU',dataset:'FX Risk',team:'Market Risk',version:'—',status:'Not Submitted',updated:'—',reviewer:'Sarah Lee'},
{id:5,granularity:'UK Branch',dataset:'Credit Risk',team:'Credit',version:'v1',status:'Under Review',updated:'11 Oct 2026',reviewer:'Sarah Lee'}];
export type Report={version:number,date:string,inputs:string,status:'Latest'|'Outdated'};
export const initialReports:Report[]=[{version:3,date:'12 Oct 2026, 14:31',inputs:'2 / 5',status:'Latest'},{version:2,date:'11 Oct 2026, 17:02',inputs:'2 / 5',status:'Outdated'},{version:1,date:'10 Oct 2026, 11:43',inputs:'1 / 5',status:'Outdated'}];
export function mockWorkbook(name:string){const text=`HKMA Stress Testing - DEMO PLACEHOLDER\nWorkbook: ${name}\nThis is a mock download. Connect FastAPI to generate real XLSX files.\n`;const blob=new Blob([text],{type:'text/plain'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name.replace(/\.xlsx$/,'.demo.txt');a.click();URL.revokeObjectURL(a.href)}
