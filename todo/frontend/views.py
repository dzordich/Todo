from django.shortcuts import render

# Create your views here.
def index(request):
    r = {
        "sess": len(request.session.items())
    }
    return render(request, 'frontend/base.html', r)
