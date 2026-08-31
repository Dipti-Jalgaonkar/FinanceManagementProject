from rest_framework import serializers
from core import models as core_models
from userauths import models as userauths_models

class FileUploadSerializer(serializers.Serializer):
    file = serializers.FileField(max_length = 1000)

    class Meta:
        fields = ['file']