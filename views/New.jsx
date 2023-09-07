const React = require ("react")

function New(){
    return(
        <div>
            <form action="/api/logs" method="POST">
            Title: <input type="text" name="title" required/>
            <br/>
            Entry: <textarea name="entry" required></textarea>
           <br/>
             shipIsBroken: <input type="checkbox"  name="shipIsBroken" defaultValue={true} />
            <br/>
             <input type="submit" value="POST"/>

            </form>
        </div>
    )
}

module.exports=New;