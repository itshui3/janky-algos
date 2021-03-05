

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


 function averageOfLevels(root: TreeNode | null): number[]|null {
    if (!root) { return null }
    let levels: number[][] = [];
    // [ level0[count, sum], level1[count, sum] ]
    
    reCountLevels(root, 0);

    return levels.map(([count, sum]) => {
        return sum / count
    });
    
    function reCountLevels(node: TreeNode, level: number) {
        if (level === 0) { levels.push([1, node.val]) }
        
        else {
            if (levels.length < level+1) {
                levels.push([1, node.val])
            } else { 
                let curLevelSlot = levels[level]
                levels[level][0] = curLevelSlot[0]+1
                levels[level][1] = curLevelSlot[1]+node.val
            }
        }
        
        if (node.right) { reCountLevels(node.right, level+1) }
        if (node.left) { reCountLevels(node.left, level+1) }
    }
};