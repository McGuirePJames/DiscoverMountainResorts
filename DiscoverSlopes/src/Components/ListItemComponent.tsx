import * as React from 'react'
import * as $ from 'jquery';

export interface Props {
    label: string,
    listItems: Array<string>
}
export interface CompState {
    selectedItems: Array<string>,
    availableItems: Array<string>,
    areListItemsDisplayed: boolean
}
export class ListItemComponent extends React.Component<Props, CompState> {
    constructor(props) {
        super(props)
        this.state = {
            selectedItems: [],
            availableItems: this.props.listItems,
            areListItemsDisplayed: false,
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.addToSelectedItems = this.addToSelectedItems.bind(this);
        this.removeFromAvailableItems = this.removeFromAvailableItems.bind(this);
        this.handleTagClick = this.handleTagClick.bind(this);
    }
    private toggleDropdown(e) {
        var target: HTMLElement = e.target;
        var tagContainer: HTMLElement = document.getElementById('TagContainer');
        if (!tagContainer.contains(target)) {
            if (this.state.areListItemsDisplayed) {
                this.setState({ areListItemsDisplayed: false })
            }
            else {
                this.setState({ areListItemsDisplayed: true })
            }
        }
    }
    private handleItemClick(e) {
        var parentEle: HTMLElement = $(e.target).closest('.list-item-container')[0];
        var item: string = parentEle.getElementsByClassName('list-item-description-container')[0].getElementsByTagName('p')[0].innerHTML;
        this.addToSelectedItems(item);
        this.removeFromAvailableItems(item);
    }
    public addToSelectedItems(item: string) {
        this.setState({
            selectedItems: [...this.state.selectedItems, item]
        })
    }
    public removeFromSelectedItems(item: string) {
        var arrayWithRemovedItem: Array<string> = this.state.selectedItems;
        var index: number = this.state.selectedItems.indexOf(item);
        arrayWithRemovedItem.splice(index, 1);

        this.setState({
            selectedItems: arrayWithRemovedItem
        })
    }
    private handleTagClick(e) {
        var parentEle: HTMLElement = $(e.target).closest('.selected-item-tag-container')[0];
        var item: string = parentEle.getElementsByTagName('p')[0].innerHTML;
        this.removeFromSelectedItems(item);
        this.addToAvailableItems(item);
    }
    public addToAvailableItems(item: string) {
        this.setState({
            availableItems: [...this.state.availableItems, item]
        })
    }
    public removeFromAvailableItems(item: string) {
        var arrayWithRemovedItem: Array<string> = this.state.availableItems;
        var index: number = this.state.availableItems.indexOf(item);
        arrayWithRemovedItem.splice(index, 1);

        this.setState({
            availableItems: arrayWithRemovedItem
        })
    }

    render() {
        const { label, listItems } = this.props;
        return (
            <div id="ListItemComponent">
                <div className="component-label">
                    <label>{this.props.label}</label>
                </div>
                <div className="selected-items-container" onClick={this.toggleDropdown}>
                    <div className="selected-list-items">
                        <div id="TagContainer">
                            {
                                this.state.selectedItems.length > 0 ? (
                                    this.state.selectedItems.map((key, selectedItemIndex) => {
                                        return (
                                            <div key={key} className="selected-item-tag-container" onClick={this.handleTagClick}>
                                                <p className="selected-item-tag">{this.state.selectedItems[selectedItemIndex]}</p>
                                                <div className="remove-tag-container">
                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                </div>
                                            </div>)
                                    })
                                ) : (
                                        <p className="placeholder">Select a tag</p>
                                    )

                            }
                        </div>

                    </div>
                    <div className="caret-down-container">
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="component-list-items-container">
                    {this.state.areListItemsDisplayed ? (
                        <div className="component-list-items unavailable-items">
                            {(
                                this.state.selectedItems.map((key, itemIndex) => {
                                    return (
                                        <div key={key} className="list-item-container">
                                            <div>
                                                <i className="fa fa-check"></i>
                                            </div>
                                            <div className="list-item-description-container">
                                                <p>{this.state.selectedItems[itemIndex]}</p>
                                            </div>
                                        </div>);
                                })
                            )}
                        </div>) : null
                    }
                    {this.state.areListItemsDisplayed ? (
                        <div className="component-list-items available-items">
                            {(
                                this.state.availableItems.map((key, itemIndex) => {
                                    return (
                                        <div key={key} className="list-item-container" onClick={this.handleItemClick}>
                                            <div className="list-item-description-container">
                                                <p>{this.state.availableItems[itemIndex]}</p>
                                            </div>
                                        </div>);
                                })
                            )}
                        </div>) : null
                    }
                </div>
            </div>
        )
    }
}