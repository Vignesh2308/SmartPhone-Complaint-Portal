from django.shortcuts import render
from rest_framework import viewsets
from .models import ComplaintService, Agent
from . import serializers
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
import json
# Create your views here.

class ComplaintViewset(viewsets.ModelViewSet):
    queryset = ComplaintService.objects.all()
    serializer_class = serializers.ComplaintSerializers


class AgentViewset(viewsets.ModelViewSet):
    queryset = Agent.objects.all()
    serializer_class = serializers.AgentSerializers


def user_login(request):
    print(request.body)
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    # content = body['content']

    if request.method == 'POST':
        print('POST REQUEST', request.POST)
        username = body['Usercode']
        password = body['Password']

        user = authenticate(username=username, password=password)
        print(username, password)
        if user:
            if user.is_active:
                login(request, user)
                return HttpResponse(json.dumps({'status': "success"}))
            else:
                return HttpResponse("false1")
        else:
            return HttpResponse("false2")
    else:
        return HttpResponse("false3")