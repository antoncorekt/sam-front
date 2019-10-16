import React from "react";
import {Icon} from "antd";

export class Pane extends React.Component{

    render() {

        const {title, icon, buttonsTitle} = this.props;

        return <div className="flex pane flex-column">
            {title !== undefined
               ? <div className="flex space-between pane-title padding10 padding-left">
                    <div>
                        {icon === undefined
                            ? <Icon type={icon}/>
                            : ""
                        }
                        <div>{title}</div>
                    </div>
                    <div>
                        {buttonsTitle !== undefined
                            ? buttonsTitle()
                            : ""
                        }
                    </div>
                 </div>
               : ""
            }
            <div className="pane-body padding10">
                {this.props.children}
            </div>
        </div>;
    }

}