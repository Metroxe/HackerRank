/* you only have to complete the function given below.
Node is defined as

class Node {
int data;
Node left;
Node right;
}

*/

        void preOrder(Node root){
                int i = 0;
                ArrayList<Node> arr = new ArrayList<Node>();
        arr.add(i,root);
        String result = Integer.toString(arr.get(i).data);
        Node cur = root;
        Node last = null;

        while (true) {
        if (cur.left != null && !arr.contains(cur.left)) {
        i+=1;
        cur = cur.left;
        arr.add(i,cur);
        result += " " + Integer.toString(arr.get(i).data);

        } else if (cur.right !=null && !arr.contains(cur.right)) {
        i+=1;
        cur = cur.right;
        arr.add(i,cur);
        result += " " + Integer.toString(arr.get(i).data);

        } else if (cur != root) {
        i-=1;
        cur = arr.get(i);

        } else {
        break;
        }
        }

        System.out.println(result);
        }
