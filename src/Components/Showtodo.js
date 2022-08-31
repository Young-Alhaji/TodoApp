const Showtodo = ({editItem,deleteItem,alltodo,editedIndex,todo,settodo,updateItem}) => {
    const styleNoReg={
      fontWeight: "bold",
      color: 'blue',
      fontSize: '150%',
      textAlign: 'center',
  }
      return ( 
          <>
  
  <div className="col-9">
  {alltodo.length==0? <div style={styleNoReg}> You Currently have no To-dos</div>:''}
  
                      <table className="table table-hover table-dark table-responsive-lg font-weight-bold text-center ">
                          <tr>
                              <th>S/n</th>
                              <th className="bg-primary">Todos</th>
                              <th>Action</th>
                          </tr>
                         
                          {
                              
                              alltodo.map((item,index)=>(
                                  <>
                                  
                                      <tr>
                                          <td>{index+1}</td>
                                          <td className="bg-primary">{item.todo}</td>
                                          
                                          <button className="btn btn-danger mx-2 text-lg" onClick={()=>deleteItem(index)}>
                                            <i class="fa fa-trash" aria-hidden="true"></i>
                                          </button>
                                          <button data-toggle="modal"data-target="#exampleModal"
                                          className="btn btn-warning mx-2" onClick={()=>editItem(index)} 
                                          >
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                          </button>
                                      </tr>
  
                                      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                          <div class="modal-content bg-dark">
                                            <div class="modal-header">
                                              <h5 class="modal-title text-primary" id="exampleModalLabel">Edit Details </h5>
                                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                              <span aria-hidden="true">&times;</span>
                                              </button>
                                             </div>
                                                <div class="modal-body">
                                                   <input type="text"  className="form-control my-2" value={todo} placeholder={alltodo[editedIndex].todo} onChange={(e)=>settodo(e.target.value)}  />
                                                 </div>
                                                 <div class="modal-footer">
                                                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                      <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={updateItem}>Save</button>
                                              </div>
                                            </div>
                                          </div>
                                       </div>
  
                                            
                                  </>
                              )
                              )
                              
                          }
                      
                          
                          
                      </table>
                  </div>
          </>
       );
  }
   
  export default Showtodo;