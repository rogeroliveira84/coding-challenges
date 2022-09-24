import React, {useEffect, useState} from 'react';
import {getTreeviewStructure, TreeviewStructure} from "../services/getTreeviewStructure";
import Treeview from "../components/Treeview";

const TreeviewPage = () => {
    const [treeviewStructure, setTreeviewStructure] = useState<TreeviewStructure[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getTreeviewStructure().then(value => {
            setTreeviewStructure(value);
            setIsLoading(false);
        })
    }, []);

    return (
        <Treeview
            treeviewStructure={treeviewStructure}
            isLoading={isLoading}
        />
    );
}

export default TreeviewPage;
