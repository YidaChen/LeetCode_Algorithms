public class Solution {
    public String reverseString(String s) {
        StringBuffer sb = new StringBuffer();
        for(int i = s.length()-1; i >= 0; i--){
            sb.append(s.charAt(i));
        }
        return sb.toString();
    }
    public String reverseString2(String s) {
		char[] world = s.toCharArray();
		int i = 0;
		int j = s.length() - 1;
		while(i < j){
			char temp = world[i];
			world[i] = world[j];
			world[j] = temp;
			i++;
			j--;
		}
		return new String(world);
    }
}
