function path(parent,dest)
{
    var stack=[];
    stack.push(dest);
    var i=dest;

    while(i != -1)
    {
        i=parent[i];
        stack.push(i);
    }
    stack.pop();

    var answer="Shortest Path: ";
    while(!stack.length==0){

        answer =answer+stack.pop()+" ->";
        
    }

    console.log(answer);
    document.querySelector('#answer').innerHTML=answer+"END";

}




function shortest_path(graph,src,dest)
{
    
    var distance=[];

    for(i=0;i<=9;i++)
    distance.push(9999999);

    distance[src]=0;
    
    var parent = [];
    parent[src]= -1;

    

    var weight=[ //change this 
        [0,0], //only to make one based indexing
        [10,7], //node1 
        [10,10,15,12],
        [7,15,7],
        [15,9,13],
        [10,15,12,8],
        [15,7,22,15],
        [9,12,22,9],
        [13,8,15,5],
        [9,5]
    ];

    
    for(i=1;i<9;i++)
    {
        for(j=1;j<=9;j++)
        {
            for(k=0;k<graph[j].length;k++)   // j->k
            {
                if(distance[graph[j][k]]> distance[j]+weight[j][k] )
                {
                    distance[graph[j][k]]=distance[j]+ weight[j][k];
                    parent[graph[j][k]]=j;
                }
            }
        }
    }

        //important code: to check negative cycle
        //modify product>1;

    
   path(parent,dest);
    console.log(distance[dest]);
        
}




function main()
{
    var graph= [  //change this
        [0,0],  //only here to make indexing one based
        [2,3],  //node 1 connection
        [1,5,4,6] , //node 2 
        [1,5,6] ,
        [2,7,8] ,
        [2,3,7,8] ,
        [2,3,7,8] ,
        [4,5,6,9] ,
        [4,5,6,9] ,
        [7,8]
    ];
    var e=15;
    var n=9;

    var src= (document.querySelector("#input_source").value);
    var dest= (document.querySelector("#input_destination").value);

    shortest_path(graph,src,dest);

}


document.querySelector("#input_button").addEventListener('click',main);