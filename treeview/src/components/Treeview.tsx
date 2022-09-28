import React, {useState} from "react";
import "./Treeview.css";
import {TreeviewStructure} from "../services/getTreeviewStructure";

type TreeviewProps = {
    treeviewStructure: TreeviewStructure[];
    isLoading: boolean;
}

const Treeview = (props: TreeviewProps) => {
    const [expandedMap, setExpandedMap] = useState(new Map());
    const {treeviewStructure, isLoading} = props;
    const onToggle = (id: string) => {
        const map = new Map(expandedMap);
        const current = map.has(id) ? map.get(id) : false;
        map.set(id, !current);
        setExpandedMap(map);
    }
    const isExpanded = (id: string) => expandedMap.get(id);

    if (isLoading) {
        return <div>Loading...</div>
    }

    const getStyle = (
        id: string,
        children: TreeviewStructure[]
    ) => {
        if (!children?.length) {
            return 'none';
        }
        return isExpanded(id) ? 'expanded' : 'collapsed';
    }

    return (
        <div>
            {treeviewStructure?.map(({name, children}) => (
                <ul key={name}>
                    <li
                        className={getStyle(name, children)}
                        onClick={() => onToggle(name)}
                    >{name}</li>
                    {
                        children && isExpanded(name) && (
                            <Treeview
                                isLoading={false}
                                treeviewStructure={children}
                            />)
                    }
                </ul>
            ))}
        </div>
    )
}

export default Treeview;
