import React, {useState} from "react";
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

    // if api is still fetching returns loader
    if (isLoading) {
        return <div>Loading...</div>
    }
    // Selects the list image: open, closed and none
    const getStyle = (
        id: string,
        children: TreeviewStructure[]
    ) => children?.length ? `${isExpanded(id) ? 'circle' : 'square'}` : 'none';
    return (
        <div>
            {treeviewStructure?.map(({name, children}) => (
                <ul style={{listStyleType: getStyle(name, children)}} key={name}>
                    <li onClick={() => onToggle(name)}>{name}</li>
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
