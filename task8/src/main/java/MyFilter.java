import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter( urlPatterns = {"/", "/status", "/get", "/check", "/page", "/test1", "/test2"})
public class MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest requestOne = (HttpServletRequest)request;
        String method = requestOne.getMethod();
        String url = requestOne.getRequestURL().toString();
        long time = System.currentTimeMillis();
        chain.doFilter(request, response);
        time = System.currentTimeMillis() - time;
        System.out.println(method + " - " + url + " - " + time + "ms");
    }

    @Override
    public void destroy() {

    }
}