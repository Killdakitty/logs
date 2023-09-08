const React= require("react")


function Edit({log}){
    return(
<div>
    <h2>Edit Form</h2>
 
    <form action={`/api/logs/${log._id}?_method=PUT`} method="POST">
            Title: <input type="text" name="title" defaultValue={log.title} required/>
            <br/>
            Entry: <textarea name="entry" defaultValue={log.entry} required></textarea>
           <br/>
             shipIsBroken: <input type="checkbox"  name="shipIsBroken" defaultValue={log.shipIsBroken} />
            <br/>
             <input type="submit" value="Update"/>


    </form>
</div>
    )}

    module.exports=Edit