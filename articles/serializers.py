from rest_framework import serializers
from articles.models import Article

# Article Serializer


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
