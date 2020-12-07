import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {

    // recup des valeurs recherchees
    const [description, setDescription] = useState(todo.description);

    //console.log(todo);// pour visualiser les variables 
    //de valeurs recherchees qui est ici description

    //edit description function

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(
                `http://localhost:5000/todos/${todo.todo_id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            }
            );
            //console.log(response); on le remplace par:
            window.location =("/"); // pour passer 
            //le chagement en sur la route suivante
        } catch (err) {
            console.error(err.message);
        }
    }

    return(
        
    <Fragment> 
            
        <button type="button" 
        className="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${todo.todo_id}`}
        >
          Edit
        </button>
        
       
        <div className="modal" id={`id${todo.todo_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
        
             
              <div className="modal-header">
                <h4 className="modal-title">Edit Todo</h4>
                <button 
                type="button" 
                className="close" 
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
                >
                    &times;
                </button>
              </div>
        
              
              <div className="modal-body">
                <input type="text" 
                className="form-control" 
                value={description}
                onChange= {e => setDescription(e.target.value)}
                />
              </div>
        
             
              <div className="modal-footer">
                <button type="button" 
                class="btn btn-warning" 
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
                >
                   Edit 
                </button>

                <button type="button" 
                class="btn btn-danger" 
                data-dismiss="modal">
                   Close 
                </button>
              </div>
        
            </div>
          </div>
        </div> 
   </Fragment>
       
        
    )
}

export default EditTodo;