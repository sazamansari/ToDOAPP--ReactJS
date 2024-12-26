import React from "react";
import ReactDOM from "react-dom/client";



export default class EditModel extends React.Component{
    constructor(props){
        super(props);
       
        this.ModelRef = React.createRef();
        this.titleRef = React.createRef();
        this.descriptionRef = React.createRef();

        this.showModel =this.showModel.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    get modal(){
        return window.bootstrap.Modal.getInstance(this.ModelRef.current) ?? new window.bootstrap.Modal(this.ModelRef.current);
    }
    handleEdit(){
        this.props.onItemEdited({
        title: this.titleRef.current.value,
        description: this.descriptionRef.current.value,
        });
      let modal = window.bootstrap.Modal.getInstance(this.ModelRef.current);
      modal.hide();

    }
    showModel(){
        let element;
        let modal =  new window.bootstrap.Modal(this.ModelRef.current);
        this.modal.show();
    }

    render(){
        let {title, description} = this.props;
        return(
            <React.Fragment>
                <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                onClick={this.showModel}
                >Edit
                </button>
                
                <div className="modal fade" aria-hiden="true" ref={this.ModelRef}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit To Do : {this.props.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Title</label>
                                        <input ref={this.titleRef} type="text" className="form-control" defaultValue={title}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea ref={this.descriptionRef} cols='30' row ='5' className="form-control" defaultValue={description}></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.handleEdit}>Save Changes</button>

                            </div>
                        </div>
                    </div>
            </div>
            </React.Fragment>
        );
    }
}