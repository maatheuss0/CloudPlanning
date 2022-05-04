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

        public virtual DbSet<Diagrama> Diagramas { get; set; }
        public virtual DbSet<Ec2> Ec2s { get; set; }
        public virtual DbSet<Empresa> Empresas { get; set; }
        public virtual DbSet<GrupoSeguranca> GrupoSegurancas { get; set; }
        public virtual DbSet<Rotum> Rota { get; set; }
        public virtual DbSet<Subnet> Subnets { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<UsuarioComum> UsuarioComums { get; set; }
        public virtual DbSet<Vpc> Vpcs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-0BA1Q0M\\SQLEXPRESS; initial catalog=CloudPlanning; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Diagrama>(entity =>
            {
                entity.HasKey(e => e.IdDiagrama)
                    .HasName("PK__Diagrama__7232863844DCFC0F");

                entity.ToTable("Diagrama");

                entity.HasIndex(e => e.Nome, "UQ__Diagrama__6F71C0DCF381AD2C")
                    .IsUnique();

                entity.Property(e => e.IdDiagrama).HasColumnName("idDiagrama");

                entity.Property(e => e.IdEc2).HasColumnName("idEC2");

                entity.Property(e => e.IdEmpresa).HasColumnName("idEmpresa");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdEc2Navigation)
                    .WithMany(p => p.Diagramas)
                    .HasForeignKey(d => d.IdEc2)
                    .HasConstraintName("FK__Diagrama__idEC2__6B24EA82");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Diagramas)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Diagrama__idEmpr__6A30C649");
            });

            modelBuilder.Entity<Ec2>(entity =>
            {
                entity.HasKey(e => e.IdEc2)
                    .HasName("PK__EC2__3F0898BDCA4E33FC");

                entity.ToTable("EC2");

                entity.Property(e => e.IdEc2).HasColumnName("idEC2");

                entity.Property(e => e.Armazenamento).HasColumnName("armazenamento");

                entity.Property(e => e.AutoAssign)
                    .HasColumnName("autoAssign")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdVpc).HasColumnName("idVPC");

                entity.Property(e => e.ImagemComponente)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("imagemComponente");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.NomeChave)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeChave");

                entity.Property(e => e.QuantidadeProcessadores).HasColumnName("quantidadeProcessadores");

                entity.Property(e => e.Ram).HasColumnName("RAM");

                entity.Property(e => e.SistemaOperacional)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("sistemaOperacional");

                entity.Property(e => e.SubRede)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("subRede");

                entity.HasOne(d => d.IdVpcNavigation)
                    .WithMany(p => p.Ec2s)
                    .HasForeignKey(d => d.IdVpc)
                    .HasConstraintName("FK__EC2__idVPC__656C112C");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__Empresa__75D2CED46858FFE8");

                entity.ToTable("Empresa");

                entity.HasIndex(e => e.Telefone, "UQ__Empresa__2A16D97FD5DEBEC1")
                    .IsUnique();

                entity.HasIndex(e => e.Cnpj, "UQ__Empresa__AA57D6B43F1DD1C9")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia, "UQ__Empresa__E7ADFC70B3E275E2")
                    .IsUnique();

                entity.Property(e => e.IdEmpresa).HasColumnName("idEmpresa");

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("CNPJ");

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.NomeFantasia)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("nomeFantasia");

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("telefone");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Empresas)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Empresa__idUsuar__3F466844");
            });

            modelBuilder.Entity<GrupoSeguranca>(entity =>
            {
                entity.HasKey(e => e.IdGrupoSeguranca)
                    .HasName("PK__Grupo_Se__9ABDED6DE645C034");

                entity.ToTable("Grupo_Seguranca");

                entity.Property(e => e.IdGrupoSeguranca).HasColumnName("idGrupoSeguranca");

                entity.Property(e => e.CidrBlocksEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("cidr_blocks_egress");

                entity.Property(e => e.CidrBlocksIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("cidr_blocks_ingress");

                entity.Property(e => e.FromPortEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("from_port_egress");

                entity.Property(e => e.FromPortIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("from_port_ingress");

                entity.Property(e => e.NomeGrupoSeguranca)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.ProtocolEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("protocol_egress");

                entity.Property(e => e.ProtocolIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("protocol_ingress");

                entity.Property(e => e.ToPortEgress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("to_port_egress");

                entity.Property(e => e.ToPortIngress)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("to_port_ingress");
            });

            modelBuilder.Entity<Rotum>(entity =>
            {
                entity.HasKey(e => e.IdRoute)
                    .HasName("PK__Rota__F6B8C6BBC0698619");

                entity.Property(e => e.IdRoute).HasColumnName("idRoute");

                entity.Property(e => e.BlockIp)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("blockIp");

                entity.Property(e => e.IpDestino)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ipDestino");

                entity.Property(e => e.IpOrigem)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("ipOrigem");

                entity.Property(e => e.NomeRoute)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nomeRoute");
            });

            modelBuilder.Entity<Subnet>(entity =>
            {
                entity.HasKey(e => e.IdSubnet)
                    .HasName("PK__Subnet__77ABF7FC0A6FFFE9");

                entity.ToTable("Subnet");

                entity.Property(e => e.IdSubnet).HasColumnName("idSubnet");

                entity.Property(e => e.Acesso)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("acesso");

                entity.Property(e => e.Area)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("area");

                entity.Property(e => e.IpSubnet)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("ipSubnet");

                entity.Property(e => e.Mascara)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("mascara");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.SubRede)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("subRede");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__03006BFF89E7023B");

                entity.ToTable("TipoUsuario");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.Permissao)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("permissao");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__645723A6410620A5");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Email, "UQ__Usuario__AB6E6164688929D4")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.IdTipoUsuario).HasColumnName("idTipoUsuario");

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__idTipoU__398D8EEE");
            });

            modelBuilder.Entity<UsuarioComum>(entity =>
            {
                entity.HasKey(e => e.IdUsuarioComum)
                    .HasName("PK__UsuarioC__59740779E167A180");

                entity.ToTable("UsuarioComum");

                entity.HasIndex(e => e.Cpf, "UQ__UsuarioC__C1F8973123089C86")
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
                    .HasConstraintName("FK__UsuarioCo__idEmp__440B1D61");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.UsuarioComums)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__UsuarioCo__idUsu__4316F928");
            });

            modelBuilder.Entity<Vpc>(entity =>
            {
                entity.HasKey(e => e.IdVpc)
                    .HasName("PK__VPC__3D8E43C2F58DA268");

                entity.ToTable("VPC");

                entity.Property(e => e.IdVpc).HasColumnName("idVPC");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.IdGrupoSeguranca).HasColumnName("idGrupoSeguranca");

                entity.Property(e => e.IdRoute).HasColumnName("idRoute");

                entity.Property(e => e.IdSubnet).HasColumnName("idSubnet");

                entity.Property(e => e.ImagemComponente)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("imagemComponente");

                entity.Property(e => e.NatGateway)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("natGateway");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.IdGrupoSegurancaNavigation)
                    .WithMany(p => p.Vpcs)
                    .HasForeignKey(d => d.IdGrupoSeguranca)
                    .HasConstraintName("FK__VPC__idGrupoSegu__628FA481");

                entity.HasOne(d => d.IdRouteNavigation)
                    .WithMany(p => p.Vpcs)
                    .HasForeignKey(d => d.IdRoute)
                    .HasConstraintName("FK__VPC__idRoute__60A75C0F");

                entity.HasOne(d => d.IdSubnetNavigation)
                    .WithMany(p => p.Vpcs)
                    .HasForeignKey(d => d.IdSubnet)
                    .HasConstraintName("FK__VPC__idSubnet__619B8048");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
