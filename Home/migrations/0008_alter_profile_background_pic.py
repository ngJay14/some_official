# Generated by Django 4.1.1 on 2022-11-20 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Home', '0007_alter_profile_background_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='background_pic',
            field=models.ImageField(default='default_background.png', upload_to='profile'),
        ),
    ]