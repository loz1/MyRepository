import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/get")
public class GetName extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name;
        name = request.getParameter("name");
        if(name.length() <= 100){
            response.getOutputStream().print("<div style = 'color: MediumPurple'>Name is " + name + "</div>");
        }
        else{
            response.getOutputStream().print("<div style = 'color: red'>Too big name</div>");
        }
    }
}
