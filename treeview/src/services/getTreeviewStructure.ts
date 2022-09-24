import treeviewStructureMock from "../mocks/treeviewStructureMock.json";
import {sleep} from "../utils/sleep";

export interface TreeviewStructure {
    name: string;
    children: TreeviewStructure[];
}

export const getTreeviewStructure = async (): Promise<TreeviewStructure[]> => {
    await sleep(1000);
    return treeviewStructureMock;
}