var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function Item(value,weight){
	this.value = value;
	this.weight = weight;
};

var items = new Array();
var capacity;
var matrix ;
var keep_matrix;

function demoPopulateItems(){
	items[0]=new Item(12,4); 
	// items[1]=new Item(10,6);
	// items[2]=new Item(8,5);
	// items[3]=new Item(11,7);
	// items[4]=new Item(14,3);
	// items[5]=new Item(7,1);
	// items[6]=new Item(9,6);
}

$(document).ready(function() {
	loadDemoItems();
});
	
/**
/* The algorithm.
/* Solves the problem and return the solution as 2D-array */
function solve(itemArray, capacity){
	matrix = create2DMatrix(itemArray.length, capacity);
	keep_matrix = create2DMatrix(itemArray.length, capacity);
	for(var c=0; c <= capacity; c++){ 
		matrix[0][c] = 0;
		keep_matrix[0][c] = 0;
	}
	for(var r=1; r<itemArray.length+1; ++r){//rows
			for(var c=0; c<=capacity; ++c){
				var toMatrix = 0;
				//fit in itself?
				var fit = items[r-1].weight<= c;
				if(fit){//add remaining mini-knapsack if any, and compare to not putting it
					var restCap = c-items[r-1].weight; 
					toMatrix = items[r-1].value+ matrix[r-1][restCap];
					if( toMatrix > matrix[r-1][c])
						keep_matrix[r][c] = 1;
					else
						keep_matrix[r][c] = 0;
					toMatrix = Math.max(toMatrix, matrix[r-1][c]);
				}else{//copy the knapsack from row above
					toMatrix = matrix[r-1][c];
					keep_matrix[r][c] = 0;
				}				
				matrix[r][c] = toMatrix;
			}
		}		
	return matrix; 	
}

/**
/* Analyze the keep_matrix and find what Items are included in solution: */
function analyze(keep_matrix){
    var solution_items = [];
	var row = keep_matrix.length;
	var col = keep_matrix[1].length-1;
	var current_c = col;
	for(var r =row-1; r>0; --r){	
		if(keep_matrix[r][current_c] == 1){
			solution_items.push(items[r-1]);
			current_c = current_c - items[r-1].weight;
		}
	}
	return solution_items;
}

/**
/* returns an "empty" 2D array with dimensjons [itms+1][caps+1] 
/* Used by solve() method where this array gets filled up with solution and are returned*/
function create2DMatrix(itms, caps){
	var arr = new Array(itms);
	for(var i=0; i<=itms; ++i){
		arr[i] = new Array(caps+1);
	}
	return arr;
}



/**
/* VIEW */

function createAndShow(matrix){ 
	var rows = matrix.length+1
	var colomns = matrix[0].length+1;
	var table = $('#solution-table');
	table.empty(); 
	
	//header row
	var trh = $('<tr> </tr>');
	trh.append('<th class="no-border"></th>');
	trh.append('<th class="no-border">capacity ==&gt</th>');	
	for(var i=0; i<colomns-1; ++i){
		trh.append('<th>'+i+'</th>');
	}
	table.append(trh);
	
	//table content
	for(var r=0; r<rows-1; ++r){
		var tr = $('<tr></tr>');
		if(r>0){
			tr.append('<td class="del"><input type="button" class="but1" value="delete" id="del'+(r-1)+'"></td>');			
			tr.append('<td class="lef">value='+items[r-1].value+' weight='+items[r-1].weight+'</td>');
		}else{
			tr.append('<td class="no-border"></td>');
			tr.append('<td class="lef">no items</td>');
		}
		for(var c=0; c<colomns-1; ++c){	
			var td_elem;			
			td_elem = $('<td>'+matrix[r][c]+'</td>');
			if(r==matrix.length-1 && c==matrix[0].length-1)td_elem.css({"background-color":"#117f54"});
			//td_elem.css({'background-image':'url("images/neutral.png")'});
			//bindOtherClick(td_elem,r,c); 
			tr.append(td_elem);
		}
		table.append(tr);
	}
	for(var i = 0; i<items.length;++i){
		setOnclickTd(i);
	}
	
	showSolutionItems();
}

function showSolutionItems(){	
	var solution_items = analyze(keep_matrix);
	var elem = $('#solution-items-table'); 
	elem.empty();
	elem.append('<tr><th>Items in solution</th></tr>');
	for(var i=0; i<solution_items.length;++i){
		elem.append('<tr><td>val='+solution_items[i].value+' w='+solution_items[i].weight+'</td></tr>');
	}
	elem.append("<tr><td style='background-color:#117f54'>solution: "+matrix[matrix.length-1][matrix[0].length-1]+"</td></tr>");
}



/**
/* UI */

function newItem(){
	var v = $('#val').val();
	var w =$('#wei').val();
	if( !isNum(v) ||  !isNum(w)){
		alert("only numbers allowed");
		return;
	}else if(v<0 || w<0){
		alert("Only non negative numbers today");
		return;
	}
	updateWithNewItem(new Item( parseFloat(v,10) ,parseFloat( w,10) ));
}

function setOnclickTd(i){
	$("#del"+i).click(function(e){
		deleteItem(i);
	});
}

function deleteItem(i){
	items.splice(i,1);
	createAndShow(solve(items,capacity));	
}

function deleteItems(){
	items = [];
	matrix = null;
	$('#solution-table').empty().append("<tr><td>There are no items in the table</td></tr>");
}

function loadDemoItems(){
	capacity = 18;
	items=[];
	matrix=null;
	demoPopulateItems();
	createAndShow(solve(items,capacity));
}

function updateWithNewItem(item){
	items.push(item);
	createAndShow( solve(items,capacity));
}

function newCapacity(){
	var newCap = parseInt($('#capacity').val());
	if(isNum(newCap) && newCap >= 0){		
		capacity = Math.round(newCap);
		createAndShow( solve(items, capacity));
	}else{
		alert("only non negative integers allowed");
	}
}

function reverseItems(){
	items = reverse(items);
	createAndShow( solve(items, capacity));
}
	

/**
/* UTILS */

function isNum(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function reverse(array){
	var arr = [];
	var len = array.length;
	for(var i = len-1; i >=0; --i){
		arr.push(array[i]);
	}
	return arr;
}
	

}
/*
     FILE ARCHIVED ON 06:49:16 Nov 13, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:08:50 Jul 19, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 79.67
  exclusion.robots: 0.162
  exclusion.robots.policy: 0.151
  RedisCDXSource: 0.796
  esindex: 0.011
  LoadShardBlock: 56.842 (3)
  PetaboxLoader3.datanode: 94.894 (4)
  CDXLines.iter: 18.727 (3)
  load_resource: 95.261
  PetaboxLoader3.resolve: 49.934
*/