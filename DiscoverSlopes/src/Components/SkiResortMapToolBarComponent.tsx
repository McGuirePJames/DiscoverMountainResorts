import * as React from 'react'
import * as Actions from '../Actions/SkiResortMapToolBarActions'
import { DropdownComponent } from '../Components/DropdownComponent'
import { ListItemComponent } from '../Components/ListItemComponent'


export interface Props {
    isAddTrailDisplayed: boolean,
    displayAddNewTrail: () => void,
    displayFilterTrails: () => void,
    displaySearchTrail: () => void,
};
export class SkiResortMapToolBarComponent extends React.Component<Props, object>{
    constructor(props) {
        super(props)

    }
    render() {
        //const { isAddTrailDisplayed, isSearchTrailDisplayed, isFilterTrailsDisplayed } = this.props

        return (
            <div id="SkiResortMapToolBarComponent">
                <div id="MapToolBar">
                    <div className="toolbar-action" onClick={this.props.displayAddNewTrail}>
                        <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="toolbar-action" onClick={this.props.displaySearchTrail}>
                        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="toolbar-action" onClick={this.props.displayFilterTrails}>
                        <i className="fa fa-filter fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <div id="MapActionWindow">
                    {
                        this.props["skiResortMapToolBarReducer"].isAddTrailDisplayed ? (
                            <div id="AddTrailWindow" className="action-window">
                                <div className="action-title">
                                    <p>Create Trail</p>
                                </div>
                                <div className="action-window-form">
                                    <div className="form-group">
                                        <label>Trail Name</label>
                                        <div>
                                            <input id="CreateTrailName" placeholder="Trail Name" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <DropdownComponent {...{ items: ["Beginner", "Intermediate", "Advanced", "Expert", "Terrain Park"], label: "Difficulty" }} />
                                    </div>
                                    <div className="form-group">
                                        <ListItemComponent {...{ label: "Tags", listItems: ["Groomed", "Open Bowl", "Steeps and Trees", "Has Moguls", "Glades", "Pillows"] }} />
                                    </div>
                                    <div id="BeginStopButtonContainer" className="form-group">
                                        <div>
                                            <div className="button">BEGIN</div>
                                        </div>
                                        <div>
                                            <div className="button">STOP</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        this.props["skiResortMapToolBarReducer"].isSearchTrailDisplayed ? (
                            <div id="SearchForTrailsWindow" className="action-window">
                                <div className="action-title">
                                    <p>Search For Trail</p>
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        this.props["skiResortMapToolBarReducer"].isFilterTrailsDisplayed ? (
                            <div id="FilterTrailsWindow" className="action-window">
                                <div className="action-title">
                                    <p>Filter Trails</p>
                                </div>
                            </div>
                        ) : null
                    }


                </div>
            </div>
        )
    }
}