from articles.models import Article
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):

    queryset = Article.objects.all()

    # raw sql query
    # queryset = Article.objects.raw('select * from articles_article'):

    serializer_class = ArticleSerializer

    def get_serializer(self, *args, **kwargs):
        if "data" in kwargs:
            data = kwargs["data"]

            # check if many is required
            if isinstance(data, list):
                kwargs["many"] = True

        return super(ArticleViewSet, self).get_serializer(*args, **kwargs)
