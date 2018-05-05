import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as $ from 'jquery';

export interface Props {
    label: string,
    items: Array<string>
}
export class DropdownComponent extends React.Component<Props, object> {
    myDiv: HTMLDivElement;
    constructor(props) {
        super(props)
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.selectItem = this.selectItem.bind(this);

    }
    toggleDropdown() {
        var itemsContainer: HTMLElement = ReactDOM.findDOMNode(this.refs.itemsContainer);

        if (itemsContainer.classList.contains("inactive")) {
            itemsContainer.classList.remove("inactive");
            itemsContainer.classList.add("active");
        }
        else {
            itemsContainer.classList.add("inactive");
            itemsContainer.classList.remove("active");
        }
    }
    selectItem(e) {

        let parentEle: HTMLElement = $(e.target).closest('.item-container')[0];

        let value = parentEle.getElementsByTagName('p')[0].innerHTML;
        let selectedItemEle: HTMLElement = ReactDOM.findDOMNode(this.refs.selectedItem);
        selectedItemEle.classList.remove('placeholder');
        selectedItemEle.innerHTML = value;


    }
    render() {
        const { label, items } = this.props;
        return (
            <div id="DropdownComponent">
                <style dangerouslySetInnerHTML={{
                    __html: `
                        #DropdownComponent .input-container {
                            display: flex;
                            border-bottom: 1px solid #DFDFDF;
                            width: 135px;
                            cursor: pointer;
                        }
                        #DropdownComponent .label-container label{
                            color: #444;
                        }
                        #DropdownComponent .items{
                            position: absolute;
                        }
                            #DropdownComponent .input-container div:last-child {
                                margin-left: auto;
                                margin-right: 5px;
                            }
                        
                                #DropdownComponent .input-container div:last-child .fa {
                                    color: #E0E0E0;
                                }
                        
                        #DropdownComponent .input-container .selected-item{
                            font-size: 14pt;
                        }
                            #DropdownComponent .input-container .placeholder {

                                color: #757575;
                            }
                        
                        #DropdownComponent .items {
                            overflow: hidden;
                            background-color: #FAFAFA;
                            background-color: white;
                            width: 135px;
                            z-index: 2;
                            -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
                            -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
                            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);
                        }
                        
                            #DropdownComponent .items .item-container {
                                cursor: pointer;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                padding-top: 8px;
                                padding-bottom: 8px;
                            }
                        
                            #DropdownComponent .items.inactive .item-container {
                                height: 0;
                                padding: 0;
                            }

                    `
                }}/>
                <div className="form-group">
                    <div className="label-container">
                        <div>
                            <label>{this.props.label}</label>
                        </div>
                    </div>
                    <div className="input-container" onClick={this.toggleDropdown}>
                        <div className="placeholder selected-item" ref="selectedItem">
                            {this.props.label}
                        </div>
                        <div>
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="items inactive" ref="itemsContainer" onClick={this.toggleDropdown}>
                        {
                            this.props.items.map((key, itemIndex) => {

                                return(
                                <div key={key} className="item-container" onClick={this.selectItem}>
                                    <p>{this.props.items[itemIndex]}</p>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}