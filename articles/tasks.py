from entity.sync import sync_entities
from celery import shared_task


@shared_task
def sync_ambition_entity():
    sync_entities()
