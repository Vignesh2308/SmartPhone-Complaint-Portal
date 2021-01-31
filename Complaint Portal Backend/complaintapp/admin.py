from django.contrib import admin
from .models import ComplaintService, Agent
# Register your models here.


# class ComplaintAdmin(admin.ModelAdmin):
#     list_display = ('complaint_id', 'agent', 'device_model', 'manufacturer', 'problem_summary', 'description', 'log_file', 'date', 'status')
#
#
# class AgentAdmin(admin.ModelAdmin):
#     list_display = ('agent_id', 'admin_name', 'fix_description')


admin.site.register(Agent)
admin.site.register(ComplaintService)
