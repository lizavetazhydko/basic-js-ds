const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = { left: null, right: null, data };
    if (this._root === null) {
      this._root = newNode;
      return;
    }
    let node = this._root;
    while (true) {
      if (data < node.data) {
        if (node.left === null) {
          node.left = newNode;
          return;
        }
        node = node.left;
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = newNode;
          return;
        }
        node = node.right;
      } else {
        return; // the value already exists in the tree
      }
    }
  }

  has(data) {
    let node = this._root;
    while (node !== null) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return true; // the value exists in the tree
      }
    }
    return false; // the value does not exist in the tree
  }

  find(data) {
    let node = this._root;
    while (node !== null) {
      if (data < node.data) {
        node = node.left;
      } else if (data > node.data) {
        node = node.right;
      } else {
        return node; // the value exists in the tree
      }
    }
    return null; // the value does not exist in the tree
  }

  remove(data) {
    let parent = null;
    let node = this._root;
    while (node !== null && node.data !== data) {
      parent = node;
      if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    if (node === null) {
      return; // the value does not exist in the tree
    }
    if (node.left === null && node.right === null) {
      if (parent === null) {
        this._root = null;
      } else if (parent.left === node) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (node.left !== null && node.right !== null) {
      let successorParent = node;
      let successor = node.right;
      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
      node.data = successor.data;
      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    } else {
      let child = (node.left !== null) ? node.left : node.right;
      if (parent === null) {
        this._root = child;
      } else if (parent.left === node) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }
  }

  min() {
    let node = this._root;
    while (node !== null && node.left !== null) {
      node = node.left;
    }
    return (node !== null) ? node.data : null;
  }

  max() {
    let node = this._root;
    while (node !== null && node.right !== null) {
      node = node.right;
    }
    return (node !== null) ? node.data : null;
  }}

module.exports = {
  BinarySearchTree
};