function path(parent,dest)
{
    var queue=[];
    var i=dest;
    
    while(queue.indexOf(i)==-1)  //error in this loop
    {
        queue.push(i);
        i=parent[i];
    }
    
    var answer="Shortest Path: ";
    while(!queue.length==0){

        answer =answer+queue.shift()+" ->";
        
    }

    console.log(answer);
    document.querySelector('#answer').innerHTML=answer;

}



function shortest_path(graph,src)
{
    
    var distance=[];

    for(i=0;i<6;i++)
    distance.push(9999999);

    distance[src]=0;
    
    var parent = [];
    parent[src]= -1;

    var weight=[
        [0,0], //only to make one based indexing
        [0.01335,0.01856,0.010114,0.01758],  //INR
        [74.8620,1.3917,0.75774,1.333],     //USD
        [53.7770,0.71824,0.5442,0.947880],  //AUD
        [98.8068,1.3199,1.837710,1.74198],  //GBP
        [56.724,0.7576,1.0547,0.5737]       //CAD
    ];

        // usd->cad  =1.333 instead of 1.31950


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
    
    
   
    //negative cycle check???

    flag = 0;

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
                    flag++;break;
                }
            }

            if(flag)
            break;
        }
        if(flag)
        break;
    }

    if(flag)        // write an else statement to print no -ve cycle found
    path(parent,src);  
    
    for(i=1;i<6;i++)
    console.log(parent[i]);
   
        
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
    var e=20;
    var n=5;

    var src= (document.querySelector("#input_source").value);

    shortest_path(graph,src);

}


document.querySelector("#input_button").addEventListener('click',main);