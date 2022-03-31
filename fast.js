function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {

    // preorder dfs in place modification
    if(t1===undefined)
        return t2;
    if(t2===undefined)
        return t1;

    t1.val+=t2.val;

    t1.left=mergeTrees(t1.left,t2.left);
    t1.right=mergeTrees(t1.right,t2.right);

    return t1;

};