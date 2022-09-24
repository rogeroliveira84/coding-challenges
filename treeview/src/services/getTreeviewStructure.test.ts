import {getTreeviewStructure} from "./getTreeviewStructure";
import * as treeviewStructureMock from "../mocks/treeviewStructureMock.json";

it("getTreeviewStructure should return a valid response", async () => {
    const result = await getTreeviewStructure();
    expect(result).toStrictEqual(treeviewStructureMock);
});
