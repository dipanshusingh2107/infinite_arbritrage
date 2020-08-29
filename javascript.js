function path(child,src,distance,weight)
{
    var queue=[],multiply, profit=0,j=1,k=0;
   
    var i=src;
    var answer=distance[src] + distance[child[src]];
    multiply= weight[src][child[src]];
    queue[0]=src;
    i=child[src];
    while(i != src)
    {   
        queue[j]=i;
        answer=answer + distance[child[i]];
        multiply=multiply*weight[i][child[i]];
        i=child[i];
        j++;   
    }
   
    queue[j]=src;
    var solution= "Path";

     
    if (answer>0) 
    {
      while(k<=j)
      {   
        solution =solution+queue[k]+" ->"; 
        profit= (multiply-1)*100;
      }

      console.log(answer);
      document.querySelector('#answer').innerHTML=solution+profit+"END";
   

    }
     else
      {
        console.log(answer);
        document.querySelector('#answer').innerHTML="No profit is possible";
      }
    
}




function shortest_path(graph,src)
{
    
    var distance=[];

    for(i=0;i<=5;i++)
    distance.push(9999999);

    distance[src]=1;
    
    var child = [];

    var weight=[
        [0,0], //only to make one based indexing
        [0.01335,0.01856,0.010114,0.01758],
        [74.8620,1.3917,0.75774,1.333],
        [53.7770,0.71824,0.5442,0.947880],
        [98.8068,1.3199,1.837710,1.74198],
        [56.724,0.7576,1.0547,0.5737]
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
                    child[j]=graph[j][k];
                }
            }
        }
    }


    //negative cycle check???


    for(i=1;i<5;i++)
    {
        for(j=1;j<=5;j++)
        {
            for(k=0;k<graph[j].length;k++)
            {
                if(distance[graph[j][k]]> distance[j]+logweight[j][k] )
                {
                    distance[graph[j][k]]=distance[j]+ logweight[j][k];
                    child[j]=graph[j][k];
                    path(child,graph[j][k],distance,weight); 
                }
            }
        }
    }

   
        
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