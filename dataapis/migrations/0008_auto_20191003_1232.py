# Generated by Django 2.2.5 on 2019-10-03 04:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dataapis', '0007_auto_20191003_1231'),
    ]

    operations = [
        migrations.AlterField(
            model_name='birbsighting',
            name='location',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dataapis.Location'),
        ),
        migrations.AlterField(
            model_name='birbsighting',
            name='species',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dataapis.Species'),
        ),
    ]