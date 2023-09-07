const React= require('react')

function Index({logs}){
    return(
<div>
<nav>
    <a href="/logs/new">Create a New Log </a>
</nav>

<ul>
    
{logs.map(log=>{
    return(
        <li key={log._id} className='border p-5'>
        <a href={`/logs/${log._id}`}>{log.title}</a>
          
       
        </li>
    )
})}
</ul>



</div>

    )
}

module.exports=Index