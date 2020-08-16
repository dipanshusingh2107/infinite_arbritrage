function path(parent,dest)
{
    var stack =new stack();
    stack.push(dest);
    var i=dest;
    while(i!= -1)
    {
        i=parent[i];
        stack.push(i);
    }
    stack.pop();

    var answer="Shortest Path ";
    var 
    while(!stack.isEmpty()){

        answer =answer+(stack.peek()+1)+" ->";
        stack.pop();
    }
    document.querySelector('answer').innerHTML=answer;
}

function shortest_path(graph,src,dest)
{
    var distance=new array();

    for(i=0;i<=9;i++)
    distance.push(9999999);

    distance[src]=0;
    
    var parent = new array();
    parent[src]= -1;

    for(i=1;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            for(k=0;k<graph[j].size();k++)
            {
                if(distance[graph[j][k][0]]> distance[j]+graph[j][k][1])
                {
                    distance[graph[j][k][0]]=distance[j]+graph[j][k][1];
                    parent[graph[j][k][0]]=j;
                }
            }
        }
    }
path(parent,dest);
        
}




function main()
{
    var graph= [
        [ [2,10] , [3,7] ],
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

    var src=document.querySelector("#input_source").value;
    var dest=document.querySelector("#input_destination").value;
   shortest_path(graph,src,dest);

}


document.querySelector("#input_button").addEventListener('click',main);