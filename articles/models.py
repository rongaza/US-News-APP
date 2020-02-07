from entity.config import EntityConfig, register_entity
from django.db import models


class Article(models.Model):
    source_name = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    title = models.TextField(unique=True)
    description = models.TextField()
    url = models.TextField()
    url_to_image = models.TextField()
    published_at = models.DateField()
    content = models.TextField()


@register_entity()
class ArticleConfig(EntityConfig):
    queryset = Article.objects.all()
