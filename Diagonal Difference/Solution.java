import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        int n = in.nextInt();
        int diag1 = 0;
        int diag2 = 0;
        int a[][] = new int[n][n];

        for (int row = 0; row < n; row++) {
            for (int col = 0; col < n; col++) {
                a[row][col] = in.nextInt();
                if (row == col) {
                    diag1 += a[row][col];
                }
                if (row + col == n - 1) {
                    diag2 += a[row][col];
                }
            }
        }

        System.out.println(Math.abs(diag1 - diag2));
    }
}
