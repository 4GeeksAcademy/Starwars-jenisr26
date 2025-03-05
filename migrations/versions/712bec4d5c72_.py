"""empty message

Revision ID: 712bec4d5c72
Revises: 530eb300af66
Create Date: 2025-03-05 19:45:50.614833

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '712bec4d5c72'
down_revision = '530eb300af66'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('character_favorite', schema=None) as batch_op:
        batch_op.create_foreign_key(None, 'characters', ['character_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('character_favorite', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')

    # ### end Alembic commands ###
