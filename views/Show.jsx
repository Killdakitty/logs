const React= require('react');
function Show({log}){
    return(

        
        <div>

<nav>
    <a href="/logs/index"> Go back to Index Page </a>
</nav>
            <div>{log.title}</div>
            <div>{log.entry}</div>
            <div>{log.shipIsBroken ? "shipIsBroken" : "shipIsNotBroken"}</div>
            <div>{new Date(log.createdAt).toLocaleDateString()}</div>

        </div>
    )
}

module.exports= Show