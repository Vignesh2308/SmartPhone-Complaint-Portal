from rest_framework import serializers
from .models import ComplaintService, Agent


class ComplaintSerializers(serializers.ModelSerializer):
    class Meta:
        model = ComplaintService
        fields = '__all__'


class AgentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = '__all__'