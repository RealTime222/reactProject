function GameStatus(props)
{
    let tmp=[];
    tmp=props.mask.split('');
    let ans="hurray you won";
    
    for(let i=0;i<tmp.length;i++)
    {
        if(tmp[i]=='_')
           ans="oooooops you lost"
    }

    tmp.forEach(element => {
        if(element=='_')
        ans="oooooops you lost"
       
    });
    return(
        <h1>{ans}</h1>
    )
} 
export default GameStatus 