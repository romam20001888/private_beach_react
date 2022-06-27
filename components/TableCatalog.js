
import React,{useState} from 'react';


export default function TableCatalog({
    activeElement,
    Modalbymore,
    ModalModalbymore,
    ModalbymoreGlobal,
    ModalModalbymoreGlobal,
    setactiveElement,
    activeHoverElement,
    setactiveHoverElement,light,tableInfo,SetInfoTable,tableId,funSliderRef}){
	function setClickElement(val){
		ModalModalbymoreGlobal("Global_active")
		ModalModalbymore("-active")
		SetInfoTable(val.tableId,val.row)
		setactiveElement({"tableId":val.tableId,"row":val.row})
	}
	function setHoverElement(val){
		setactiveHoverElement({"tableId":val.tableId,"row":val.row})
	}
    return(
        <>
			<div className={`mobileTableMainContainer ${light}`} id={`ggMobile${tableId}`}
				onMouseOut={
					()=>{
						setactiveHoverElement({"row":null,"tableId":null})
					}
				}
			>
				<div className='mobileTable'>
					<div className='param-title__table_container_value'><div>{tableInfo.type.name}</div></div>
					<div className='param-title__table_container_value'><div>{tableInfo.length.name}</div></div>
					<div className='param-title__table_container_value'><div>{tableInfo.width.name}</div></div>
					<div className='param-title__table_container_value'><div>{tableInfo.depth.name}</div></div>
					<div className='param-title__table_container_value notviseble'><div>{tableInfo.nullik.name}</div></div>	
				</div>
				<div className='mobileTableValue'>
					<div className='param-title__table_container_value'>
						{tableInfo.type.value?.map((index,num) => {
							return (
								<div className={`${(activeElement.row==num&&activeElement.tableId==tableId)?"clicked":""} ${(activeHoverElement.row==num&&activeHoverElement.tableId==tableId)?"hovered":""} param-title__table_container_value_type`} key={num} data-elementtable={tableId} data-id={num}
									onClick={
										()=>{
											if(index!="-"){
												setClickElement({"row":num,"tableId":tableId})
											}
										}
									}
									onMouseOver={
										()=>{
											
											if(index!="-"){
												setHoverElement({"row":num,"tableId":tableId})
											}
										}
									}
								>{index}</div>
							);
						})}	
					</div>
					<div className='param-title__table_container_value' >
						{tableInfo.length.value?.map((index,num) => {
							return (
								<div className={`${(activeElement.row==num&&activeElement.tableId==tableId)?"clicked":""} ${(activeHoverElement.row==num&&activeHoverElement.tableId==tableId)?"hovered":""} `} key={num} data-elementtable={tableId} data-id={num} 
									onClick={
										()=>{
											if(index!="-"){
												setClickElement({"row":num,"tableId":tableId})
											}
										}
									}
									onMouseOver={
										()=>{
											
											if(index!="-"){
												setHoverElement({"row":num,"tableId":tableId})
											}
										}
									}
								>{index}</div>
							);
						})}	
					</div>
					<div className='param-title__table_container_value' >
						{tableInfo.width.value?.map((index,num) => {
							return (
								<div className={`${(activeElement.row==num&&activeElement.tableId==tableId)?"clicked":""} ${(activeHoverElement.row==num&&activeHoverElement.tableId==tableId)?"hovered":""} `} key={num} data-elementtable={tableId} data-id={num} 
									onClick={
										()=>{
											if(index!="-"){
												setClickElement({"row":num,"tableId":tableId})
											}
										}
									}
									onMouseOver={
										()=>{
											
											if(index!="-"){
												setHoverElement({"row":num,"tableId":tableId})
											}
										}
									}
								>{index}</div>
							);
						})}	
					</div>
					<div className='param-title__table_container_value' >
						{tableInfo.depth.value?.map((index,num) => {
							return (
								<div className={`${(activeElement.row==num&&activeElement.tableId==tableId)?"clicked":""} ${(activeHoverElement.row==num&&activeHoverElement.tableId==tableId)?"hovered":""} `} key={num} data-elementtable={tableId} data-id={num} 
									onClick={
										()=>{
											if(index!="-"){
												setClickElement({"row":num,"tableId":tableId})
											}
										}
									}
									onMouseOver={
										()=>{
											
											if(index!="-"){
												setHoverElement({"row":num,"tableId":tableId})
											}
										}
									}
								>{index}</div>
							);
						})}	
					</div>
					<div className='param-title__table_container_value' >
						{tableInfo.nullik.value?.map((index,num) => {
							return (
								<div className={`${(activeElement.row==num&&activeElement.tableId==tableId)?"clicked":""} ${index=="✔"?"green":"red"} ${(activeHoverElement.row==num&&activeHoverElement.tableId==tableId)?"hovered":""} `} key={num} data-elementtable={tableId} data-id={num}
									onClick={
										()=>{
											if(index!="✖"){
												setClickElement({"row":num,"tableId":tableId})
											}
										}
									}
									onMouseOver={
										()=>{
											
											if(index!="✖"){
												setHoverElement({"row":num,"tableId":tableId})
											}
										}
									}
								>{index}</div>
							);
						})}	
					</div>
				</div>
			</div>
        </>
    )
} 
;