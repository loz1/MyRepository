import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/check")
public class Check extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Integer number = 1;
        Character letter = 'a';

        JSONObject object = new JSONObject();
        try {
            object.put("number", number);
            object.put("letter", letter);
        }
        catch (JSONException e) {
            e.printStackTrace();
        }
        response.getOutputStream().print("<div'>" + object + "</div>");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        doPost(request, response);
    }
}
