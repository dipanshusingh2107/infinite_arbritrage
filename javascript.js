/*
function map_making()
{
    var map=new Map();
    map.set([1,2],10);
    map.set([1,3],7);
    map.set([3,6],7);
    map.set([6,8],15);
    map.set([8,9],5);
    map.set([9,7],9);
    map.set([7,4],9);
    map.set([4,2],15);
    map.set([2,6],12);
    map.set([6,7],22);
    map.set([5,2],10);
    map.set([5,3],15);
    map.set([5,8],8);
    map.set([5,7],12);
    map.set([4,8],13);


    map.set([2,1],10);
    map.set([3,1],7);
    map.set([6,3],7);
    map.set([8,6],15);
    map.set([9,8],5);
    map.set([7,9],9);
    map.set([4,7],9);
    map.set([2,4],15);
    map.set([6,2],12);
    map.set([7,6],22);
    map.set([2,5],10);
    map.set([3,5],15);
    map.set([8,5],8);
    map.set([7,5],12);
    map.set([8,4],13);



    return map;
}

*/


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

    var answer="Shortest_Path ";
    while(!stack.isEmpty()){

        answer =answer+stack.peek()+" ->";
        stack.pop();
    }
    console.log(answer);
    document.querySelector('#answer').innerHTML=answer;

}




function shortest_path(graph,src,dest)
{
    
    var distance=[];

    for(i=0;i<=9;i++)
    distance.push(9999999);

    distance[src]=0;
    
    var parent = [];
    parent[src]= -1;

    //var length=[0,2,4,3,3,4,4,4,4,2];

    //var map= map_making();

    var weight=[
        [0,0], //only to make one based indexing
        [10,7],
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
            for(k=0;k<graph[j].length;k++)
            {
                if(distance[graph[j][k]]> distance[j]+weight[j][k] )
                {
                    distance[graph[j][k]]=distance[j]+ weight[j][k];
                    parent[graph[j][k]]=j;
                }
            }
        }
    }
    
   
    console.log(distance[dest]);
        
}




function main()
{
    var graph= [
        [0,0],  //only here to make indexing one based
        [2,3],
        [1,5,4,6] ,
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