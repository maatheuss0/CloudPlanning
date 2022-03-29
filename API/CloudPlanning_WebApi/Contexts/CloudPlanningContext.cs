using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CloudPlanning_WebApi.Domains;

#nullable disable

namespace CloudPlanning_WebApi.Contexts
{
    public partial class CloudPlanningContext : DbContext
    {
        public CloudPlanningContext()
        {
        }

        public CloudPlanningContext(DbContextOptions<CloudPlanningContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Componente> Componentes { get; set; }
        public virtual DbSet<Diagrama> Diagramas { get; set; }
        public virtual DbSet<Empresa> Empresas { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<UsuarioComum> UsuarioComums { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=NOTE0113G2\\SQLEXPRESS; initial catalog=CloudPlanning; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Componente>(entity =>
            {
                entity.HasKey(e => e.IdComponentes)
                    .HasName("PK__Componen__FE4AB944F80E146D");

                entity.Property(e => e.IdComponentes).HasColumnName("idComponentes");

                entity.Property(e => e.Codigo)
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("codigo");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.ImagemComponente)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("imagemComponente");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");
            });

            modelBuilder.Entity<Diagrama>(entity =>
            {
                entity.HasKey(e => e.IdDiagrama)
                    .HasName("PK__diagrama__72328638B775C27B");

                entity.ToTable("diagrama");

                entity.Property(e => e.IdDiagrama).HasColumnName("idDiagrama");

                entity.Property(e => e.IdComponentes).HasColumnName("idComponentes");

                entity.Property(e => e.IdEmpresa).HasColumnName("idEmpresa");

                entity.Property(e => e.Nome)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdComponentesNavigation)
                    .WithMany(p => p.Diagramas)
                    .HasForeignKey(d => d.IdComponentes)
                    .HasConstraintName("FK__diagrama__idComp__3C69FB99");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Diagramas)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__diagrama__idEmpr__3B75D760");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__empresa__75D2CED420A19249");

                entity.ToTable("empresa");

                entity.HasIndex(e => e.Telefone, "UQ__empresa__2A16D97F7477E804")
                    .IsUnique();

                entity.HasIndex(e => e.Cnpj, "UQ__empresa__AA57D6B40DB413B9")
                    .IsUnique();

                entity.Property(e => e.IdEmpresa).HasColumnName("idEmpresa");

                entity.Property(e => e.Cnpj)
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("CNPJ");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.NomeFantasia)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nomeFantasia");

                entity.Property(e => e.Telefone)
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("telefone");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Empresas)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__empresa__idUsuar__2E1BDC42");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuario__645723A6FC10CA8D");

                entity.ToTable("usuario");

                entity.HasIndex(e => e.Email, "UQ__usuario__AB6E61644F6FBB73")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("senha");
            });

            modelBuilder.Entity<UsuarioComum>(entity =>
            {
                entity.HasKey(e => e.IdUsuarioComum)
                    .HasName("PK__usuarioC__5974077917D0D773");

                entity.ToTable("usuarioComum");

                entity.HasIndex(e => e.Cpf, "UQ__usuarioC__C1F89731B8260B85")
                    .IsUnique();

                entity.Property(e => e.IdUsuarioComum).HasColumnName("idUsuarioComum");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("CPF");

                entity.Property(e => e.DataNascimento).HasColumnType("date");

                entity.Property(e => e.IdEmpresa).HasColumnName("idEmpresa");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Nome)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.UsuarioComums)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__usuarioCo__idEmp__32E0915F");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.UsuarioComums)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__usuarioCo__idUsu__31EC6D26");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
