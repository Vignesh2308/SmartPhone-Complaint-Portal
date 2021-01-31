from django.db import models
# from django.contrib.auth.models import User


# Create your models here.


class Agent(models.Model):
    agent_id = models.AutoField(primary_key=True)
    agent_name = models.CharField(max_length=100)

    def __str__(self):
        return self.agent_name


class ComplaintService(models.Model):
    complaint_id = models.AutoField(primary_key=True)
    agent = models.ForeignKey(Agent, on_delete=models.CASCADE)
    device_model = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=150)
    problem_summary = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    log_file = models.FileField(null=True, blank= True)
    date = models.DateTimeField(auto_now_add=True, blank=True)
    status = models.BooleanField()
    fix_description = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return str(self.complaint_id)
