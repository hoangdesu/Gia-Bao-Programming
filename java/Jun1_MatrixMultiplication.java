public class Jun1_MatrixMultiplication {
    public static void main(String[] args) {
        int[][] m1 = {
            {1, 2, 3},
            {4, 5, 6}
        };

        // inverseM1 = inverseMatrix(m1);

        // multiplyMatrices(m1, inverseM1);
        // {
        //     {1, 0, 0},
        //     {0, 1, 0},
        //     {0 ,0, 1}

        // }


        int[][] m2 = {
            {7, 8},
            {9, 10},
            {11, 12}
        };

        int[][] m1xm2 = multiplyMatrices(m1, m2);
        //
        // 58 64 
        // 139 154 

        if (m1xm2 == null) {
            System.out.println("Invalid matrix lengths");
            System.exit(0);
        }
        
        for (int[] row : m1xm2) {
            for (int el : row) {
                System.out.print(el + " ");
            }
            System.out.println();
        }

    }

    public static int[][] multiplyMatrices(int[][] m1, int[][] m2) {
        // columns of the 1st matrix must equal the number of rows of the 2nd matrix
        if (m1.length > 0 && m2.length > 0) {
            if (m1[0].length != m2.length || m1.length != m2[0].length) {
                return null;
            }
        }

        int cols = m1.length;
        int rows = m2[0].length;

        int[][] product = new int[cols][rows];

        for (int i = 0; i < product.length; i++) {
            for (int j = 0; j < product[i].length; j++) {
                System.out.print(m1[i][j] + "," + m2[j][i] + " ");

                int total = 0;
                for (int k = 0; k < m2.length; k++) {
                    total += m1[i][k] * m2[k][j];
                }

                product[i][j] = total;
            }
            // System.out.println();
        }

        return product;
        
    }
}
