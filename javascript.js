function path(parent,dest,id)
{
    var stack=[];
    var i=parent[dest];
    
    while(stack.indexOf(i)==-1)  //error in this loop
    {
        stack.push(i);
        i=parent[i];
    }
    stack.push(i);
    
    var answer="Shortest Path: ";
    // // for(i=0;i<stack.length;i++)
    // // console.log(stack[i]);
    // console.log(stack[-1]);

    if(stack[stack.length-1]!=dest)
    answer+= dest + "->";

    while(!stack.length==0){

        answer =answer+stack.pop()+" ->";
        
    }


    document.querySelector('#answer'+id).innerHTML=answer;

}



function shortest_path(graph,src,weight,id)
{
    
    var distance=[];

    for(i=0;i<6;i++)
    distance.push(9999999);

    distance[src]=0;
    
    var parent = [];
    parent[src]= -1;

    
        


    var logweight=[];  
    logweight.push(0);  //for 1 based indexing
    
    for(i=1;i<6;i++)
    {
        var temp=[];
        for(j=0;j<4;j++)
        {
            var t= -1*Math.log(weight[i][j]);
            temp.push(t);
        }
        logweight.push(temp);
    }       

    
    for(i=1;i<5;i++)
    {
        for(j=1;j<=5;j++)
        {
            for(k=0;k<graph[j].length;k++)
            {
                if(distance[graph[j][k]]> distance[j]+logweight[j][k] )
                {
                    distance[graph[j][k]]=distance[j]+ logweight[j][k];
                    parent[graph[j][k]]=j;
                }
            }
        }
    }
    
    
    if(parent[src]!=-1)        // write an else statement to print no -ve cycle found
    path(parent,src,id);  
    else
    document.querySelector('#answer'+id).innerHTML="NO PATH FOUND";

    
   
        
}




function main()
{
    var graph= [
        [0,0],  //only here to make indexing one based
        [2,3,4,5],
        [1,3,4,5],
        [1,2,4,5],
        [1,2,3,5],
        [1,2,3,4]
    ];
    
    var weight=[
        [0,0], //only to make one based indexing
        [0.01335,0.01856,0.010114,0.01758],  //INR
        [74.8620,1.3917,0.75774,1.5],     //USD
        [53.7770,0.71824,0.5442,0.947880],  //AUD
        [98.8068,1.3199,1.837710,1.74198],  //GBP
        [56.724,0.7576,1.0547,0.5737]       //CAD
    ];  // usd->cad  =1.5 instead of 1.31950

    var e=20;
    var n=5;

    var src= (document.querySelector("#input_source").value);

    shortest_path(graph,src,weight,'');

}


function main2()
{
    var graph= [
        [0,0],  //only here to make indexing one based
        [2,3,4,5],
        [1,3,4,5],
        [1,2,4,5],
        [1,2,3,5],
        [1,2,3,4]
    ];
    
    var weight=[
        [0,0], //only to make one based indexing
        [0.01335,0.01856,0.010114,0.01758],  //INR
        [74.8620,1.3917,0.75774,1.31950],     //USD
        [53.7770,0.71824,0.5441,0.947880],  //AUD
        [98.8068,1.31,1.837710,1.74198],  //GBP
        [56.724,0.7576,1.0547,0.5737]       //CAD
    ];  //changed gbp to usd from 1.3199 to 1.31
        //changed AUD to GBP from 0.5441 to 0.5442

    var e=20;
    var n=5;

    var src= (document.querySelector("#input_source2").value);

    shortest_path(graph,src,weight,'2');
}


function main3()
{
    var graph= [
        [0,0],  //only here to make indexing one based
        [2,3,4,5],
        [1,3,4,5],
        [1,2,4,5],
        [1,2,3,5],
        [1,2,3,4]
    ];
    
    var weight=[
        [0,0], //only to make one based indexing
        [0.01335,0.01856,0.010114,0.01758],  //INR
        [74.8620,1.3917,0.75774,1.31950],     //USD
        [53.7770,0.71824,0.599,0.947880],  //AUD
        [98.8068,1.3199,1.837710,1.79],  //GBP
        [56.724,0.7576,1.0547,0.5737]       //CAD
    ];  
    // changed AUD->GBP 0.599 instead of 0.5442
    //changed GBP->CAD 1.79 instead of 1.74198

    var src= (document.querySelector("#input_source3").value);

    shortest_path(graph,src,weight,'3');
}


document.querySelector("#input_button").addEventListener('click',main);
document.querySelector("#input_button2").addEventListener('click',main2);
document.querySelector("#input_button3").addEventListener('click',main3);